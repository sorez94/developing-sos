import { NextResponse } from 'next/server';
import { Client } from 'pg';

export async function GET() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    try {
        await client.connect();

        // دریافت اطلاعات از جدول product
        const result = await client.query('SELECT id, name, image FROM sos.product');
        await client.end();

        // تبدیل داده باینری image به base64
        const rows = result.rows.map(row => ({
            id: row.id,
            name: row.name,
            image: row.image.toString('base64'),
        }));

        return NextResponse.json(rows);
    } catch (error) {
        console.error('DB Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
