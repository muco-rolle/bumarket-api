import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './modules/product/product.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        GraphQLModule.forRoot({
            autoSchemaFile: './src/schema.graphql',
            debug: true,
            playground: true,
            context: ({ req }) => ({ headers: req.headers }),
        }),
        ProductModule,
    ],
})
export class AppModule {}
