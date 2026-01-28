import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/d3c741e7-69fa-4d90-91ef-0c58dc13107b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        alert('Ошибка отправки заявки. Попробуйте позже.');
      }
    } catch (error) {
      alert('Ошибка отправки заявки. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.name && formData.phone && formData.email && formData.city && formData.consent;

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Check" size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-secondary mb-2">Заявка отправлена!</h3>
          <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full my-8 animate-in fade-in zoom-in duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-heading font-bold text-secondary">Получить прайс и условия</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-secondary transition-colors"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-secondary font-medium">
              Имя <span className="text-accent">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
              className="mt-1.5"
              placeholder="Введите ваше имя"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-secondary font-medium">
              Телефон <span className="text-accent">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              required
              className="mt-1.5"
              placeholder="+7 (___) ___-__-__"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-secondary font-medium">
              Эл. почта <span className="text-accent">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
              className="mt-1.5"
              placeholder="example@mail.ru"
            />
          </div>

          <div>
            <Label htmlFor="city" className="text-secondary font-medium">
              Город <span className="text-accent">*</span>
            </Label>
            <Input
              id="city"
              type="text"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              required
              className="mt-1.5"
              placeholder="Введите ваш город"
            />
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleChange('consent', checked as boolean)}
              required
            />
            <Label
              htmlFor="consent"
              className="text-sm text-muted-foreground leading-tight cursor-pointer"
            >
              Я согласен на обработку персональных данных в соответствии с{' '}
              <a href="#" className="text-accent hover:underline">
                политикой конфиденциальности
              </a>
            </Label>
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full mt-6"
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                Отправка...
              </>
            ) : (
              <>
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}