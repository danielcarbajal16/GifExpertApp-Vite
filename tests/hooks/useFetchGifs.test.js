import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el customHook useFetchGifs', () => {
    test('Debe retornar el valor inicial', () => {
        const { result } = renderHook( () => useFetchGifs('Messi') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('Debe retornar un arreglo de imagenes y el isLoading en false', async () => {
        const { result } = renderHook( () => useFetchGifs('Messi') );
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
})