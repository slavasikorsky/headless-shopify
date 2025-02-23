import { useContext, createContext } from "react";

type ProductState = {
  [key: string]: string;
} & {
  image?: string;
};

type ProductContextType = {
  state: ProductState;
  updateOption: (name: string, value: string) => ProductState;
  updateImage: (index: string) => ProductState;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export default function useProduct() {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
}
