"use client";

import { useRouter } from "next/navigation";

function AboutPage() {
  const router = useRouter();
  return (
    <section className="p-5">
      <h1>About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
        nesciunt corrupti molestiae facilis ab et ullam ea tempora, nihil, at
        veniam dolorem labore. Corporis sint veniam deleniti laudantium quia
        quis omnis architecto est quas, dolores, nihil id porro. Labore fuga, ea
        fugiat dolor quidem perspiciatis sapiente consequuntur sint eum
        laboriosam quam minima recusandae quo autem possimus, illo, harum quae
        ut molestias. Neque voluptatibus rerum impedit nemo. Ipsum, quam labore.
        Earum repellat dicta, suscipit animi mollitia saepe quasi praesentium
        libero iure tempora est dignissimos cum? Reprehenderit laborum
        perspiciatis maiores quo praesentium modi earum fuga, ipsam tenetur
        perferendis nesciunt doloremque est! Laborum?
      </p>

      <button
        className="bg-sky-500 px-3 py-2 rounded-md"
        onClick={() => {
          router.push("/");
        }}
      >
        Click
      </button>
    </section>
  );
}

export default AboutPage;
