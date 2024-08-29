import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

export default function TableHeading({
    name,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChanged = () => {},
    children,
}) {
    return (
        <th onClick={(e) => sortChanged(name)}>
            <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                {children}
                {sortable && (
                    <div>
                        <ChevronUpIconComponent
                            __name={name}
                            __sort_field={sort_field}
                            __sort_direction={sort_direction}
                        />

                        <ChevronDownIconComponent
                            __name={name}
                            __sort_field={sort_field}
                            __sort_direction={sort_direction}
                        />
                    </div>
                )}
            </div>
        </th>
    );
}

const ChevronUpIconComponent = ({ __name, __sort_field, __sort_direction }) => {
    return (
        <ChevronUpIcon
            className={
                "w-4 " +
                (__sort_field === __name && __sort_direction === "asc"
                    ? "text-white"
                    : "")
            }
        />
    );
};

const ChevronDownIconComponent = ({
    __name,
    __sort_field,
    __sort_direction,
}) => {
    return (
        <ChevronDownIcon
            className={
                "w-4 " +
                (__sort_field === __name && __sort_direction === "desc"
                    ? "text-white"
                    : "")
            }
        />
    );
};
