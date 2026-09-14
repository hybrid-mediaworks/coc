import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { path?: string; slug?: string; secret?: string };
    if (body.secret !== process.env.REVALIDATE_SECRET) {
      return Response.json({ error: "unauthorized" }, { status: 401 });
    }
    // `path` is the real route. `slug` is kept for older callers but only works for top-level
    // pages — a nested page's slug is not its path.
    const target = body.path ?? (body.slug ? `/${body.slug}` : null);
    if (target) {
      await revalidatePath(target.startsWith("/") ? target : `/${target}`);
    } else {
      await revalidatePath("/", "layout");
    }
    return Response.json({ revalidated: true });
  } catch {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }
}
