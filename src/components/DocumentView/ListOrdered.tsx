import { DocumentBlockListOrdered } from '@gitbook/api';
import { BlockProps } from './Block';
import { Blocks } from './Blocks';

export function ListOrdered(props: BlockProps<DocumentBlockListOrdered>) {
    const { block, style, ...contextProps } = props;

    return (
        <Blocks
            {...contextProps}
            tag="ol"
            nodes={block.nodes}
            style={['list-decimal', 'ps-8', style]}
        />
    );
}
