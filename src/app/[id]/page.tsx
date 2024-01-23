import { notFound } from 'next/navigation';
import Client from './client';

type Props = { params: { id: string } };

export default async function LaunchDetail({ params }: Props) {
  if (!params.id) return notFound();

  return <Client id={params.id} />;
}
