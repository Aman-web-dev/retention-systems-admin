import React from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Card,CardContent,CardDescription,CardHeader,CardTitle } from '../ui/card'
  import { Badge } from 'lucide-react'

export  function FakeTable() {
  return (
    <Card x-chunk="dashboard-05-chunk-3">
    <CardHeader className="px-7">
      <CardTitle>Queries</CardTitle>
      <CardDescription>
        Recent orders from your store.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Query</TableHead>
            <TableHead className="hidden sm:table-cell">
              Topic
            </TableHead>
            <TableHead className="hidden sm:table-cell">
              Status
            </TableHead>
            <TableHead className="hidden md:table-cell">
              Date
            </TableHead>
           
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-accent">
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                liam@example.com
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              Sale
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge className="text-xs" >
                Fulfilled
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-23
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                olivia@example.com
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              Quality
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge className="text-xs" >
                Declined
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-24
            </TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                liam@example.com
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              Sale
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge className="text-xs" >
                Fulfilled
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-23
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow> */}
          <TableRow>
            <TableCell>
              <div className="font-medium">Noah Williams</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                noah@example.com
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              Subscription
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge className="text-xs" >
                Fulfilled
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-25
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Emma Brown</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                emma@example.com
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              Sale
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge className="text-xs" >
                Fulfilled
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-26
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                liam@example.com
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              Sale
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge className="text-xs" >
                Fulfilled
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-23
            </TableCell>
           
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Olivia Smith</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                olivia@example.com
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              Quality
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge className="text-xs" >
                Declined
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-24
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Emma Brown</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                emma@example.com
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              Sale
            </TableCell>
            <TableCell className="hidden sm:table-cell">
              <Badge className="text-xs" >
                Fulfilled
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              2023-06-26
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
  )
}

export default FakeTable
