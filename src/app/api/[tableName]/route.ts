import { NextRequest } from 'next/server';
import create from '@/utils/db/create';
import update from '@/utils/db/update';
import scan from '@/utils/db/scan';
import read from '@/utils/db/read';

export const GET = async (request: NextRequest, { params }: { params: Promise<{ tableName: string }> }) => {
  const TableName = (await params).tableName;
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');
  return id ? read(TableName, id) : scan(TableName);
}

export const POST = async (request: NextRequest, { params }: { params: Promise<{ tableName: string }> }) => {
  const TableName = (await params).tableName;
  const formData = await request.formData();
  return create(TableName, null, formData);
}

export const PUT = async (request: NextRequest, { params }: { params: Promise<{ tableName: string }> }) => {
  const TableName = (await params).tableName;
  const formData = await request.formData();
  return update(TableName, null, formData);
}

export const DELETE = async () => {}