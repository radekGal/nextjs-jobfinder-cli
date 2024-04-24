import type { ComponentPropsWithoutRef, ReactNode } from "react"

export type LayoutsProps = {
  children: ReactNode
}

export type InputProps = {
  label: string;
  type: string;
  icon?: boolean;
} & ComponentPropsWithoutRef<"input">

export type SignInAndUp = {
  name: string;
  email: string;
  password: string;
}

export type ListType = {
  id: string | number;
  value: string;
}

export type ListDetailsProps = {
  title: string;
  list: ListType[]
}
