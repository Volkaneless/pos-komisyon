import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";
import type { POSProvider } from "@/types/pos";

interface POSListProps {
  providers: POSProvider[];
  onEdit: (provider: POSProvider) => void;
  onDelete: (id: string) => void;
}

export const POSList = ({ providers, onEdit, onDelete }: POSListProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>İsim</TableHead>
          <TableHead>Tür</TableHead>
          <TableHead>Aylık Ücret</TableHead>
          <TableHead>Komisyon</TableHead>
          <TableHead>İşlemler</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {providers?.map((provider) => (
          <TableRow key={provider.id}>
            <TableCell>{provider.name}</TableCell>
            <TableCell>{provider.type}</TableCell>
            <TableCell>{provider.monthly_fee}</TableCell>
            <TableCell>{provider.commission_rate}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onEdit(provider)}
                >
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => onDelete(provider.id)}
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};