import React from 'react';
import { useToast } from "@chakra-ui/core";

function Toast() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Register
    </Button>
  );
}
export default toast