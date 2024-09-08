import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ticket } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { ArrowDown } from "lucide-react";

interface Props {
  tickets: Ticket[];
}

const DataTable = ({ tickets }: Props) => {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Link href={{ query: { orderBy: "title" } }}>Title</Link>

                <ArrowDown className="inline p-1" />
              </TableHead>
              <TableHead>
                <div className="flex justify-center">
                  <Link href={{ query: { orderBy: "status" } }}>Status</Link>

                  <ArrowDown className="inline p-1" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex justify-center">
                  <Link href={{ query: { orderBy: "priority" } }}>
                    Priority
                  </Link>

                  <ArrowDown className="inline p-1" />
                </div>
              </TableHead>
              <TableHead>
                <Link href={{ query: { orderBy: "createdAt" } }}>
                  Created At
                </Link>

                <ArrowDown className="inline p-1" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets
              ? tickets.map((ticket) => (
                  <TableRow key={ticket.id} data-href="/">
                    <TableCell>
                      <Link href={`/tickets/${ticket.id}`}>{ticket.title}</Link>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center"></div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center"></div>
                    </TableCell>
                    <TableCell>
                      {ticket.createdAt.toLocaleDateString("en-US", {
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
