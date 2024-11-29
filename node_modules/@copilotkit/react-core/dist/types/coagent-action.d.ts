type CoAgentStateRenderProps<T> = {
    state: T;
    nodeName: string;
    status: "inProgress" | "complete";
};
type CoAgentStateRenderHandlerArguments<T> = {
    nodeName: string;
    state: T;
};
type CoAgentStateRender<T = any> = {
    name: string;
    nodeName?: string;
    handler?: (props: CoAgentStateRenderHandlerArguments<T>) => void | Promise<void>;
    render?: ((props: CoAgentStateRenderProps<T>) => string | React.ReactElement | undefined | null) | string;
};

export { CoAgentStateRender, CoAgentStateRenderHandlerArguments, CoAgentStateRenderProps };
