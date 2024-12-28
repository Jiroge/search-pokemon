import { makeClient } from '@/lib/apollo-client';
import { GET_POKEMON } from '@/graphql/queries';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  if (!name) {
    return NextResponse.json({ error: 'Name parameter is required' }, { status: 400 });
  }

  try {
    const client = makeClient();
    const { data } = await client.query({
      query: GET_POKEMON,
      variables: { name: name.toLowerCase() },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: `Pokemon not found ${error}` }, { status: 404 });
  }
}