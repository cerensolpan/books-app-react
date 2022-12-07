import { XCircleIcon } from '@heroicons/react/20/solid'

export default function Alert() {
  return (
    <div className="rounded-md bg-red-50 p-4 border-l-4 border-red-400">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="flex flex-col items-start ml-3">
          <h3 className="text-sm font-medium text-red-800">No Matching Results</h3>
          <div className="mt-2 text-sm text-red-700">
            There weren't any books matching your search.
          </div>
        </div>
      </div>
    </div>
  )
}