import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { ButtonProps } from '@/app/interfaces/interfaces';
import styles from './StyleButton.module.css';

const StyleButton = (props: ButtonProps) => {
  return (
    <Link href={props.href}>
      <Button className={`${styles.styleButton} ${styles.styleButtonColorLight}`} variant="outlined">{props.cta}</Button>
    </Link>
  );
};
export default StyleButton;