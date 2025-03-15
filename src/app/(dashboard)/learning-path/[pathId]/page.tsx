'use client';

import React from 'react';
import { getLearningPathById } from '@/app/(dashboard)/age-2-4/learningPaths';
import { notFound } from 'next/navigation';
import LearningPathDetails from '@/components/LearningPathDetails';

export default function LearningPathPage({ params }: { params: { pathId: string } }) {
  const path = getLearningPathById(params.pathId);
  
  if (!path) {
    notFound();
  }

  return <LearningPathDetails path={path} />;
} 