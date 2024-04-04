import { useState } from "react";

interface TagState {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
}

export const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });

  // passing a functtion to setState allows us to pass excess properties.
  // if we set the function return type to TagState, we get errors when we try to add excess properties or misspell a property name
  return (
    <div>
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState(
                (currentState): TagState => ({
                  ...currentState,
                  // @ts-expect-error
                  tagselected: tag.id,
                })
              );
            }}
          >
            {tag.value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setState((currentState) => ({
            ...currentState,
            tags: [
              ...currentState.tags,
              {
                id: new Date().getTime(),
                value: "New",
                // @ts-expect-error
                otherValue: "something",
              },
            ],
          }));
        }}
      >
        Add Tag
      </button>
    </div>
  );
};
