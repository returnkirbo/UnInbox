import { AdapterSession } from './../authjs/src/adapters';

export type OrgContext = {
  id: number;
  publicId: string;
  memberId?: number;
  members: {
    id: number;
    userId: number | null;
    // Refer to DB schema orgMembers.role and orgMembers.status
    status: 'invited' | 'active' | 'removed';
    role: 'admin' | 'member';
  }[];
} | null;
export type UserContext = {
  id: number;
  session: AdapterSession;
} | null;
export type AuthH3SessionData = {
  isUserLoggedIn: boolean;
  userId?: number | null;
};
export interface MailDomainEntries {
  name: string;
  postalId: string;
}

export const AVATAR_TYPES = [
  { name: 'user', value: 'u' },
  { name: 'org', value: 'o' },
  { name: 'contact', value: 'c' },
  { name: 'group', value: 'g' }
] as const;

export type AvatarTypeName = (typeof AVATAR_TYPES)[number]['name'];

export type AvatarSize =
  | '3xs'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl';
