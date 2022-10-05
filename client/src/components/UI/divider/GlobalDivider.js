import * as React from 'react';
import dividerStyles from './GlobalDivider.module.css';
import { Divider } from '@mui/material';

export default function GlobalDivider(props) {
  return <Divider className={dividerStyles.divider}>{props.text}</Divider>;
}
