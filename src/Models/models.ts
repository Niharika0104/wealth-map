type User = {
  name: string;
  avatarUrl: string;
};

type AvatarGroupProps = {
  users: User[];
};
interface Owner {
  name: string;
  image: string;
}

interface Property {
  Region: string;
  Name: string;
  Owners: Owner[];
  size: string;
  Images: string[];
}
interface ListViewProps {
  Region: string;  // Changed String to string for TypeScript
  Name: string;
  Owners: User[];
  size: string;
  Images:string[]
}


export type { Owner, Property ,ListViewProps};
export type { User, AvatarGroupProps };