import { NextResponse } from "next/server";

console.log(process.env.TOKEN);

export function GET() {
  return NextResponse.json({
    message: "obteniendo datos",
  });
}

export function POST(request) {
  const data = request.json();
  return NextResponse.json({
    message: "creando datos",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "actualizando datos",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "eliminando datos",
  });
}
