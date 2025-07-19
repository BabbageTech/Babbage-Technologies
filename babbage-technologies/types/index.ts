import { ReactNode } from "react";

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface CoreValue {
  title: string;
  desc: string;
  icon: string;
}