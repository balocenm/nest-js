import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { CrearLibro } from './dto/crear-libro';
import { LibrosService } from './libros.service';
import { LibroI } from './interface/libro.interface';

@Controller('libros')
export class LibrosController {

    constructor(private readonly libroService: LibrosService) { }
    @Get()
    todosLibros(): Promise<LibroI[]> {
        return this.libroService.buscarTodos();
    }

    @Get(':id')
    buscarUno(@Param('id') idLibro: string): Promise<LibroI> {
        return this.libroService.buscarLibro(idLibro);
    }

    @Post()
    crearLibro(@Body() libroDto: CrearLibro): Promise<LibroI> {
        return this.libroService.crearLibro(libroDto);
    }
    @Put(':id')
    modificaLibro(@Param('id') idLibro: string, @Body() libroDto: CrearLibro): Promise<LibroI> {
        return this.libroService.modificarLibro(idLibro, libroDto);
    }
    @Delete(':id')
    borraLibro(@Param('id') idLibro: string): Promise<LibroI> {
        return this.libroService.borrarLibro(idLibro);
    }

}
