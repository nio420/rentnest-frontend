/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import RentalRequestDialog from "./RentalRequestDialog";

const RentalRequestButton = ({ propertyId }: { propertyId: string }) => {
  const [requested, setRequested] = useState(false);

  useEffect(() => {
    const requestStatus = localStorage.getItem(`requested-${propertyId}`);

    if (requestStatus) {
      setRequested(true);
    }
  }, [propertyId]);

  if (requested) {
    return (
      <Button size="lg" disabled>
        Request Sent
      </Button>
    );
  }

  return (
    <RentalRequestDialog propertyId={propertyId} setRequested={setRequested} />
  );
};

export default RentalRequestButton;
