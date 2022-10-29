import create from 'zustand';
import { DEFAULT_EVENT } from '../../../../config';

interface EventState {
    selectedEvent: string,
    setSelectedEvent: (event: string) => void,
}

    const useEventStore = create<EventState>((set) => ({
	selectedEvent: DEFAULT_EVENT,
	setSelectedEvent: (event: string) => set({ selectedEvent: event }),
    }));

	export default useEventStore;
