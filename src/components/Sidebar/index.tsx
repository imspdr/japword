import { useState } from 'react';

import { HiChevronDoubleLeft, HiChevronDoubleRight, HiClock, HiStar } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { Typography, useDeviceType } from '@imspdr/ui';
import { SidebarContainer } from './styled';

interface SidebarProps {
  isFolded: boolean;
  onToggleFold: () => void;
}

export default function Sidebar({ isFolded, onToggleFold }: SidebarProps) {
  const navigate = useNavigate();
  const { isPc } = useDeviceType();

  return (
    <SidebarContainer isFolded={isFolded}>
    </SidebarContainer>
  );
}
