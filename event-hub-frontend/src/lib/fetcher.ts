export async function getAllEvents() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/events`); // Changed variable name and added /api/events
  return res.json();
}