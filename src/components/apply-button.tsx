'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ApplyModal } from '@/components/apply-modal';

type ApplyButtonProps = React.ComponentProps<typeof Button> & {
  onClick?: () => void;
  href?: string;
  opensModal?: boolean;
};

export function ApplyButton({ children, onClick, href, opensModal = false, ...props }: ApplyButtonProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleClick = () => {
    if (href) {
      window.open(href, '_blank');
    } else if (opensModal) {
      setIsModalOpen(true);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <Button onClick={handleClick} {...props}>
        {children}
      </Button>
      {opensModal && <ApplyModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />}
    </>
  );
}
