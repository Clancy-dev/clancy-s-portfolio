'use client';

import { Button } from '@/components/ui/button';

interface CurrencyToggleProps {
  currency: 'UGX' | 'USD';
  onChange: (currency: 'UGX' | 'USD') => void;
}

export function CurrencyToggle({ currency, onChange }: CurrencyToggleProps) {
  return (
    <div className="inline-flex gap-1 rounded-lg border border-border bg-secondary p-1">
      <Button
        variant={currency === 'UGX' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onChange('UGX')}
        className="text-xs"
      >
        UGX
      </Button>
      <Button
        variant={currency === 'USD' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onChange('USD')}
        className="text-xs"
      >
        USD
      </Button>
    </div>
  );
}
