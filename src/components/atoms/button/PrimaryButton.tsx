import { FC, ReactNode, memo } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const PrimaryButton: FC<Props> = memo(({ children }) => {
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  );
});