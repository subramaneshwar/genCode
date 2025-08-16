"use client";
import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react'

const Client = () => {
    const trpc = useTRPC();
    const {data} = useSuspenseQuery(trpc.createAI.queryOptions({ text: "Reddy PREDETCH" }));
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default Client
