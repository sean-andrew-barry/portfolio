import { useEffect } from 'react';
import { identity } from '../data/identity';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${identity.name}` : identity.name;
  }, [title]);
}
