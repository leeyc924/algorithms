import { ReactNode } from 'react';

/** 특정 key의 optional 해제 */
export type RequiredKey<T, K> = keyof T & keyof K;

export type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};
