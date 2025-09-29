'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ApplyModal } from '@/components/apply-modal';

type ApplyButtonProps = React.ComponentProps<typeof Button> & {
    onClick?: () => void;
};


export function ApplyButton({ children, onClick, ...props }: ApplyButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
    if(onClick) {
        onClick();
    }
  }

  return (
    <>
      <Button onClick={handleClick} {...props}>
        {children}
      </Button>
      <ApplyModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
