import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductModule } from './modules/product/product.module';

@Module({
    imports: [
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
