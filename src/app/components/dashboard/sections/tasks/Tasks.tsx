"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { api, API_BASE_URL } from "@/redux/services";
import { Task, PaginationMeta } from "@/utils";

function TableHeader({ title }: { title: string }) {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      {title}
    </th>
  );
}

function TableRow({ task }: { task: Task }) {
  //@ts-ignore
  const status = task.status ? "active" : "inactive";
  const statusClass = task.status
    ? "bg-green-100 text-green-700"
    : "bg-red-100 text-red-700";

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        {task.description}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">{task.dueDate}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">{task.userId}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 py-1 text-sm font-medium rounded-full capitalize ${statusClass}`}
        >
          {status}
        </span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button className="bg-indigo-100 px-3 py-2 rounded text-indigo-600 hover:text-indigo-800">
          Edit
        </button>
      </td>
    </tr>
  );
}

function Pagination({
  meta,
  onPageChange,
}: {
  meta: PaginationMeta;
  onPageChange: (page: number) => void;
}) {
  const pages = Array.from({ length: meta.lastPage }, (_, i) => i + 1);

  return (
    <nav
      className="rounded-md border divide-x bg-white mt-4 text-sm text-gray-700"
      aria-label="Pagination"
    >
      <button
        onClick={() => meta.prevPage && onPageChange(meta.prevPage)}
        disabled={!meta.prevPage || meta.prevPage === meta.currentPage}
        className="px-3 py-2 focus:outline-none disabled:opacity-50"
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 focus:outline-none ${
            page === meta.currentPage ? "text-white bg-indigo-600" : ""
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => meta.nextPage && onPageChange(meta.nextPage)}
        disabled={!meta.nextPage || meta.nextPage === meta.currentPage}
        className="px-3 py-2 focus:outline-none disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
}

function Tasks() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [meta, setMeta] = useState<PaginationMeta | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const page = parseInt(searchParams.get("page") || "1");
  const perPage = parseInt(searchParams.get("perPage") || "10");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);

        const response = await api.get(
          `${API_BASE_URL}/api/tasks?&page=${page}&perPage=${perPage}`
        );
        setTasks(response.data.data);
        //@ts-ignore
        setMeta(response.data.meta);
      } catch (err) {
        setError("Failed to fetch tasks. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [page, perPage]);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  if (loading) {
    return <div className="text-center py-8">Loading tasks...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="font-medium text-2xl">Tasks</h2>
      <div className="shadow overflow-x-auto rounded-md">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <TableHeader title="Name" />
              <TableHeader title="Email" />
              <TableHeader title="Phone" />
              <TableHeader title="Status" />
              <TableHeader title="Role" />
              <th
                scope="col"
                className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                <span>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {tasks.map((task) => (
              <TableRow key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
      {meta && (
        <div className="flex flex-row-reverse">
          <Pagination meta={meta} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  );
}

export default Tasks;
