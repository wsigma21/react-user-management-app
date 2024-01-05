import { FC, ReactNode, memo } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo(({
     children, 
     disabled = false, 
     loading = false, 
     onClick
  }) => {
  return (
    <Button 
      bg="teal.400"
      color="white" 
      _hover={{ opacity: 0.8 }} 
      isLoading={loading}
      isDisabled={disabled || loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});