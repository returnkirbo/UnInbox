import {
  AVATAR_TYPES,
  type AvatarSize,
  type AvatarTypeName
} from '@uninbox/types';
import { cva, type VariantProps } from 'class-variance-authority';
function generateAvatarUrl(
  type: AvatarTypeName,
  publicId: string,
  size: AvatarSize | undefined
) {
  const typeObject = AVATAR_TYPES.find((t) => t.name === type);
  if (!typeObject) {
    return null;
  }

  const storageBaseUrl = useRuntimeConfig().public.storageUrl;

  return `${storageBaseUrl}/avatar/${typeObject.value}/${publicId}/${
    size ? size : '5xl'
  }?${new Date().getTime()}`;
}

export const useUtils = () => {
  return { cva, generateAvatarUrl };
};

// TODO: Fix exporting types under namespace UseUtilTypes
export type { VariantProps };
