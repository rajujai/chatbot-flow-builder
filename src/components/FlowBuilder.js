import { Box, Grid } from '@mui/material'
import { useCallback, useState } from 'react'
import ReactFlow, {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Controls,
    MiniMap,
    ReactFlowProvider,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { v4 as uuidv4 } from 'uuid'
import CustomTextNode from './CustomTextNode'
import NodePanel from './NodePanel'
import SaveButton from './SaveButton'
import SettingsPanel from './SettingsPanel'

const nodeTypes = { text: CustomTextNode }

const FlowBuilder = () => {
    const [nodes, setNodes] = useState([])
    const [edges, setEdges] = useState([])
    const [selectedNode, setSelectedNode] = useState(null)

    const onNodesChange = useCallback((changes) => {
        setNodes((nds) => applyNodeChanges(changes, nds))
    }, [])

    const onEdgesChange = useCallback((changes) => {
        setEdges((eds) => applyEdgeChanges(changes, eds))
    }, [])

    const onConnect = useCallback(
        (params) => {
            const existingEdgeFromSource = edges.some(e => e.source === params.source)
            if (existingEdgeFromSource) return
            setEdges((eds) => addEdge({ ...params, animated: true }, eds))
        },
        [edges]
    )

    const addNode = () => {
        const id = uuidv4()
        const newNode = {
            id,
            type: 'text',
            position: { x: 100, y: 100 },
            data: { text: 'New Message' },
        }
        setNodes((nds) => [...nds, newNode])
    }

    const onNodeClick = (_, node) => setSelectedNode(node)

    const updateNodeText = (id, text) => {
        setNodes((nds) =>
            nds.map((node) =>
                node.id === id ? { ...node, data: { ...node.data, text } } : node
            )
        )
    }

    const validateAndSave = () => {
        const nodeIdsWithOutgoing = new Set(edges.map(e => e.source))
        const disconnectedNodes = nodes.filter(n => !nodeIdsWithOutgoing.has(n.id))
        if (nodes.length > 1 && disconnectedNodes.length > 1) {
            alert('❌ Error: More than one node has no outgoing connection.')
        } else {
            alert('✅ Flow saved!\n' + JSON.stringify({ nodes, edges }, null, 2))
        }
    }

    return (
        <ReactFlowProvider>
            <Grid container style={{ height: '100%' }}>
                <Grid size={{ xs: 2 }} sx={{ bgcolor: '#f5f5f5', p: 2 }}>
                    {!selectedNode ? (
                        <NodePanel onAddNode={addNode} />
                    ) : (
                        <SettingsPanel
                            node={selectedNode}
                            updateNodeText={updateNodeText}
                            clearSelection={() => setSelectedNode(null)}
                        />
                    )}
                </Grid>
                <Grid size={{ xs: 10 }}>
                    <Box sx={{ height: '100%', width: '100%' }}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            onNodeClick={onNodeClick}
                            nodeTypes={nodeTypes}
                            fitView
                        >
                            <MiniMap />
                            <Controls />
                            <Background />
                        </ReactFlow>
                        <SaveButton onSave={validateAndSave} />
                    </Box>
                </Grid>
            </Grid>
        </ReactFlowProvider >
    )
}

export default FlowBuilder
