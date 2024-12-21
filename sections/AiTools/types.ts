export interface AiToolsCardProps {
   tool_id?: number;
   title:string;
   imageURL: string;
   description: string;
   tags: string;
}
// types.ts
export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
  country: string;
  favorites?: number[];
}
