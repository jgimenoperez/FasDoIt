'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
}

export function ScrollAnimationWrapper({ children }: ScrollAnimationWrapperProps) {
  useScrollAnimation();
  return <>{children}</>;
}