import { Message } from '@copilotkit/runtime-client-gql';

interface WithInternalStateManagementAndInitial<T> {
    name: string;
    initialState: T;
}
interface WithInternalStateManagement {
    name: string;
    initialState?: any;
}
interface WithExternalStateManagement<T> {
    name: string;
    state: T;
    setState: (newState: T | ((prevState: T | undefined) => T)) => void;
}
type UseCoagentOptions<T> = WithInternalStateManagementAndInitial<T> | WithInternalStateManagement | WithExternalStateManagement<T>;
interface UseCoagentReturnType<T> {
    name: string;
    nodeName?: string;
    threadId?: string;
    running: boolean;
    state: T;
    setState: (newState: T | ((prevState: T | undefined) => T)) => void;
    start: () => void;
    stop: () => void;
    run: (hint?: HintFunction) => Promise<void>;
}
interface HintFunctionParams {
    previousState: any;
    currentState: any;
}
type HintFunction = (params: HintFunctionParams) => Message | undefined;
declare function useCoAgent<T = any>(options: UseCoagentOptions<T>): UseCoagentReturnType<T>;

export { HintFunction, HintFunctionParams, UseCoagentReturnType, useCoAgent };
