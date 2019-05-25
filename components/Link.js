import React from 'react';
import { withNavigation } from 'react-navigation';
import Button from './Button';

export function Link ({ to, navigation, ...props }) {
  return (
    <Button
      onPress={() => navigation.push(to)}
      {...props}
    />
  )
}

const LinkWithNavigation = withNavigation(Link);

export default LinkWithNavigation;


