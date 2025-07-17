import { nodeTypes } from '@/types/NodeTypes'
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
import NodePanel from './NodePanel'
import SaveButton from './SaveButton'
import SettingsPanel from './SettingsPanel'


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

    const onDragOver = useCallback((event) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
    }, [])

    const onDrop = useCallback(
        (event) => {
            event.preventDefault()

            const type = event.dataTransfer.getData('application/reactflow')
            if (!type) return

            const bounds = event.target.getBoundingClientRect()
            const position = {
                x: event.clientX - bounds.left,
                y: event.clientY - bounds.top,
            }

            addNode(type, position);
        },
        []
    )

    const onConnect = useCallback(
        (params) => {
            const existingEdgeFromSource = edges.some(e => e.source === params.source)
            if (existingEdgeFromSource) return
            setEdges((eds) => addEdge({ ...params, animated: true }, eds))
        },
        [edges]
    )

    const addNode = (type, position) => {
        const id = uuidv4()
        const newNode = {
            id,
            type,
            position,
            data: { text: 'New ' + type },
        }
        setNodes((nds) => [...nds, newNode])
    }

    const onNodeClick = (_, node) => selectNode(node)

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

    const selectNode = (node) => {
        setSelectedNode(node)
        setNodes((nds) =>
            nds.map((n) => ({
                ...n,
                selected: n.id === node.id
            }))
        )
    }

    const clearSelection = () => {
        setSelectedNode(null)
        setNodes((nds) =>
            nds.map((n) => ({
                ...n,
                selected: false
            }))
        )
    }

    return (
        <ReactFlowProvider>
            <Grid container style={{ height: '100%' }}>
                <Grid size={{ xs: 2 }} p={2}>
                    {!selectedNode ? (
                        <NodePanel nodes={nodes} onSelectNode={selectNode} />
                    ) : (
                        <SettingsPanel
                            node={selectedNode}
                            updateNodeText={updateNodeText}
                            clearSelection={clearSelection}
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
                            onDrop={onDrop}
                            onDragOver={onDragOver}
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
