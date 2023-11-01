"use client"

import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import React from "react";

const BookingPage = ({ params }: { params: { serviceId: string } }) => {
  const serviceId = params.serviceId;
  const { data, isLoading } = useSingleServiceQuery(serviceId);
  console.log(data);

  return (
    <div>
      <h1>Booking Page</h1>
    </div>
  );
};

export default BookingPage;
