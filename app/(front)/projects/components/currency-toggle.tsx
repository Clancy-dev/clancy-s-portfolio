'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DollarSign, ChevronDown } from 'lucide-react';

interface CurrencyToggleProps {
  currency: 'UGX' | 'USD';
  onChange: (currency: 'UGX' | 'USD') => void;
}

export function CurrencyToggle({ currency, onChange }: CurrencyToggleProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 bg-transparent"
        >
          <DollarSign className="h-4 w-4" />
          {currency}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => onChange('UGX')}
          className={currency === 'UGX' ? 'bg-accent' : ''}
        >
          UGX (Uganda Shillings)
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onChange('USD')}
          className={currency === 'USD' ? 'bg-accent' : ''}
        >
          USD (US Dollars)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
