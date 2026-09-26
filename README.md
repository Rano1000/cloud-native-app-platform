<div align="center">

# Cloud Native App Platform

### From Containerized Application to Resilient Kubernetes Platform

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&center=true&vCenter=true&width=750&lines=Containerize+%E2%86%92+Deploy+%E2%86%92+Scale+%E2%86%92+Recover;Docker+%E2%80%A2+Kubernetes+%E2%80%A2+PostgreSQL+%E2%80%A2+Redis;Building+Resilient+Cloud-Native+Infrastructure" alt="Cloud Native Platform Animation" />

<br>

[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestrated-326CE5?logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Persistent-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-Caching-DC382D?logo=redis&logoColor=white)](https://redis.io/)
[![Node.js](https://img.shields.io/badge/Node.js-API-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![KIND](https://img.shields.io/badge/KIND-Local_Kubernetes-326CE5?logo=kubernetes&logoColor=white)](https://kind.sigs.k8s.io/)

<br>

A cloud-native application platform demonstrating containerization,
Kubernetes orchestration, service discovery, persistent storage,
self-healing, scaling, health management, resource control,
rolling deployments and application lifecycle management.

<br>

`Docker` · `Kubernetes` · `KIND` · `PostgreSQL` · `Redis` · `Node.js`

</div>

---

## Overview

Cloud Native App Platform is a multi-service application architecture designed to demonstrate how containerized workloads can be deployed and operated on Kubernetes.

The project begins with a Node.js API and progresses through Docker containerization, Docker Compose orchestration and finally a Kubernetes deployment running inside KIND.

The Kubernetes implementation includes multiple API replicas, Redis caching, PostgreSQL persistent storage, internal service discovery, health management, resource controls and external application exposure.

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=1200&center=true&vCenter=true&width=800&lines=Source+Code+%E2%86%92+Container+%E2%86%92+Kubernetes;Stateless+API+%E2%86%92+Stateful+Database;Desired+State+%E2%86%92+Reconciliation+%E2%86%92+Recovery" alt="Architecture Flow Animation" />

</div>

```text
Application
     │
     ▼
Docker Image
     │
     ▼
Docker Compose
     │
     ▼
KIND Cluster
     │
     ▼
Kubernetes
     │
     ▼
Cloud-Native Application Platform
```

---

## Architecture

```text
                               CLIENT
                                  │
                                  ▼
                         ┌─────────────────┐
                         │    NodePort     │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   api-service   │
                         └────────┬────────┘
                                  │
                ┌─────────────────┼─────────────────┐
                │                 │                 │
                ▼                 ▼                 ▼
         ┌────────────┐    ┌────────────┐    ┌────────────┐
         │  API Pod   │    │  API Pod   │    │  API Pod   │
         │    v3      │    │    v3      │    │    v3      │
         └─────┬──────┘    └─────┬──────┘    └─────┬──────┘
               │                 │                 │
               └─────────────────┼─────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
             ┌─────────────┐           ┌─────────────┐
             │    cache    │           │  database   │
             │   Service   │           │   Service   │
             └──────┬──────┘           └──────┬──────┘
                    │                         │
                    ▼                         ▼
             ┌─────────────┐           ┌─────────────┐
             │ Redis Pod   │           │ postgres-0  │
             └─────────────┘           └──────┬──────┘
                                              │
                                              ▼
                                       ┌─────────────┐
                                       │postgres-pvc │
                                       └──────┬──────┘
                                              │
                                              ▼
                                       ┌─────────────┐
                                       │ Persistent  │
                                       │   Volume    │
                                       └─────────────┘
```

### Request Flow

```text
Client
  │
  ▼
NodePort
  │
  ▼
api-service
  │
  ├──────────► API Pod
  ├──────────► API Pod
  └──────────► API Pod
                  │
          ┌───────┴────────┐
          │                │
          ▼                ▼
        cache           database
          │                │
          ▼                ▼
        Redis          PostgreSQL
                           │
                           ▼
                       PVC → PV
```

---

## Engineering Highlights

| Capability | Implementation |
|---|---|
| Containerization | Docker |
| Multi-Service Development | Docker Compose |
| Container Orchestration | Kubernetes |
| Local Kubernetes Environment | KIND |
| Stateless Workload | Kubernetes Deployment |
| Stateful Workload | Kubernetes StatefulSet |
| Self-Healing | Deployment + ReplicaSet |
| Application Scaling | 3 API replicas |
| Rolling Updates | Kubernetes Deployment |
| Deployment Rollback | Kubernetes Rollout |
| Health Management | Readiness + Liveness Probes |
| Configuration | ConfigMap |
| Credentials | Kubernetes Secret |
| Caching | Redis |
| Database | PostgreSQL |
| Persistent Storage | PVC + PV |
| Dynamic Provisioning | StorageClass |
| Service Discovery | Kubernetes DNS |
| Internal Networking | ClusterIP |
| External Exposure | NodePort |
| Resource Management | CPU + Memory Requests/Limits |
| Troubleshooting | kubectl logs / describe / exec |
| Source Control | Git + GitHub |

---

## Technology Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=docker,kubernetes,nodejs,postgres,redis,git,github,linux" alt="Technology Stack" />

</div>

### Application

- Node.js
- Express

### Containers

- Docker
- Docker Compose

### Orchestration

- Kubernetes
- KIND

### Data Layer

- PostgreSQL 17
- Redis 8

### Engineering Tooling

- Git
- GitHub
- kubectl
- Linux / WSL2

---

## Application

The application is a Node.js/Express API designed to interact with PostgreSQL and Redis while exposing health and connectivity endpoints.

### API Endpoints

| Endpoint | Purpose |
|---|---|
| `/` | API status |
| `/health` | Application health endpoint |
| `/db-check` | PostgreSQL connectivity |
| `/cache-check` | Redis connectivity |

Example response:

```json
{
  "message": "Cloud Native API v3 is running",
  "status": "healthy"
}
```

---

## Containerization

The API is packaged using Docker.

The image uses:

```text
node:22-alpine
```

Dependencies are installed using:

```bash
npm ci
```

The application starts with:

```bash
node src/app.js
```

The current application image is:

```text
cloud-native-app-platform-api:v3
```

The container exposes:

```text
3000/tcp
```

---

## Docker Compose Architecture

Docker Compose was used to validate the complete multi-service architecture before migration to Kubernetes.

```text
                   Docker Compose
                         │
           ┌─────────────┼─────────────┐
           │             │             │
           ▼             ▼             ▼
          API        PostgreSQL       Redis
           │             │             │
           └─────────────┼─────────────┘
                         │
                    Compose Network
```

Compose provided:

- Internal service discovery
- Environment configuration
- PostgreSQL persistence
- Multi-container networking
- Application dependency management

The API communicates with its dependencies using service names:

```text
API → database:5432
API → cache:6379
```

---

## Kubernetes Migration

The application architecture was subsequently migrated from Docker Compose to Kubernetes.

```text
Docker Compose                         Kubernetes

api                         →          Deployment
                                        +
                                     Service

database                    →          StatefulSet
                                        +
                                     Service
                                        +
                                     PVC / PV

cache                       →          Deployment
                                        +
                                     Service

environment variables       →          ConfigMap
                                        +
                                      Secret

Compose volume              →          PVC
                                        +
                                       PV

Compose service names       →          Kubernetes DNS
```

---

## Kubernetes Workloads

### API

The API runs as a Kubernetes Deployment with:

```yaml
replicas: 3
```

The Deployment manages the desired state while a ReplicaSet maintains the required number of Pods.

```text
Deployment
    │
    ▼
ReplicaSet
    │
    ├── API Pod
    ├── API Pod
    └── API Pod
```

### Redis

Redis runs as a Kubernetes Deployment with one replica.

```text
redis-deployment
       │
       ▼
   Redis Pod
```

### PostgreSQL

PostgreSQL runs as a StatefulSet.

```text
StatefulSet
     │
     ▼
postgres-0
```

The stateful workload is connected to persistent Kubernetes storage.

---

## Self-Healing and Reconciliation

The platform was tested against workload failure.

The API Deployment declares three replicas as its desired state.

```text
DESIRED STATE

API-1     RUNNING
API-2     RUNNING
API-3     RUNNING
```

If one Pod is removed:

```text
CURRENT STATE

API-1     RUNNING
API-2     DELETED
API-3     RUNNING
```

The ReplicaSet detects the difference between the current state and desired state.

```text
Desired: 3
Current: 2
Difference: 1
```

Kubernetes creates a replacement:

```text
RECONCILED STATE

API-1     RUNNING
API-3     RUNNING
API-4     RUNNING

Replicas: 3/3
```

This behavior was verified by deliberately deleting application Pods and observing Kubernetes restore the required replica count.

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=17&pause=1000&center=true&vCenter=true&width=800&lines=Desired%3A+3+Replicas;Failure+Detected;ReplicaSet+Reconciles;Desired+State+Restored" alt="Reconciliation Animation" />

</div>

---

## Service Discovery

Kubernetes Services provide stable network endpoints for disposable Pods.

### Redis Communication

```text
API
 │
 ▼
cache
 │
 ▼
ClusterIP Service
 │
 ▼
Redis Pod
```

The application uses:

```text
REDIS_HOST=cache
REDIS_PORT=6379
```

### PostgreSQL Communication

```text
API
 │
 ▼
database
 │
 ▼
ClusterIP Service
 │
 ▼
postgres-0
```

The application uses:

```text
DB_HOST=database
DB_PORT=5432
```

The application therefore depends on stable Kubernetes DNS names instead of Pod IP addresses.

---

## PostgreSQL Persistent Storage

PostgreSQL data is stored independently of the PostgreSQL Pod lifecycle.

```text
PostgreSQL Container
        │
        ▼
/var/lib/postgresql/data
        │
        ▼
volumeMount
        │
        ▼
postgres-storage
        │
        ▼
postgres-pvc
        │
        ▼
StorageClass
        │
        ▼
PersistentVolume
```

The cluster uses dynamic volume provisioning through the default StorageClass.

---

## Persistence Validation

Persistent storage was deliberately tested rather than assumed.

The test sequence was:

```text
Create PostgreSQL Table
          │
          ▼
Insert Persistent Data
          │
          ▼
Data Written to PVC/PV
          │
          ▼
Delete postgres-0
          │
          ▼
StatefulSet Detects Missing Pod
          │
          ▼
postgres-0 Recreated
          │
          ▼
Existing Storage Remounted
          │
          ▼
Query PostgreSQL
          │
          ▼
Original Data Available
```

Test data:

```text
Kubernetes persistent storage works
```

The row remained available after the PostgreSQL Pod was deleted and recreated.

This validates the separation between:

```text
Pod Lifecycle ≠ Data Lifecycle
```

---

## Configuration Management

Application configuration is externalized from the container image.

### ConfigMap

The ConfigMap provides non-sensitive values:

```text
DB_HOST
DB_PORT
DB_NAME
REDIS_HOST
REDIS_PORT
```

### Secret

Sensitive database configuration is stored separately:

```text
DB_USER
DB_PASSWORD
```

The real Secret manifest:

```text
kubernetes/secret.yaml
```

is intentionally excluded from Git.

The repository contains:

```text
kubernetes/secret.example.yaml
```

Create the local Secret:

```bash
cp kubernetes/secret.example.yaml kubernetes/secret.yaml
```

Then replace the placeholder credentials with local values.

> [!IMPORTANT]
> Real credentials should never be committed to the repository.

---

## Health Management

The API Deployment contains readiness and liveness probes.

### Readiness Probe

```text
Kubernetes
    │
    ▼
GET /health
    │
    ├── Success → Pod receives Service traffic
    │
    └── Failure → Pod removed from Service traffic
```

Configuration:

```text
Initial Delay: 5 seconds
Period:        10 seconds
```

### Liveness Probe

```text
Kubernetes
    │
    ▼
GET /health
    │
    ├── Success → Container continues running
    │
    └── Repeated Failure → Container restarted
```

Configuration:

```text
Initial Delay: 10 seconds
Period:        20 seconds
```

The current `/health` endpoint validates API process responsiveness.

It does not currently perform dependency-level health checks against Redis or PostgreSQL.

---

## Resource Management

The API containers define explicit CPU and memory requests and limits.

| Resource | Request | Limit |
|---|---:|---:|
| CPU | 100m | 500m |
| Memory | 128Mi | 256Mi |

```text
REQUESTS
   │
   └── Used by the Kubernetes scheduler

LIMITS
   │
   └── Runtime resource boundary
```

The resulting Pod QoS class is:

```text
Burstable
```

---

## Scaling

The API runs with three replicas:

```text
api-deployment

Desired:   3
Ready:     3
Available: 3
```

The workload was manually scaled during testing using:

```bash
kubectl scale deployment api-deployment --replicas=3
```

The declarative manifest was subsequently updated so that Git also represents the desired replica count.

---

## Rolling Updates

Versioned API images were used to test Kubernetes rolling deployments.

```text
Old ReplicaSet
      │
      ▼
Create New Pod
      │
      ▼
Readiness Check
      │
      ▼
New Pod Ready
      │
      ▼
Terminate Old Pod
      │
      ▼
Continue Rollout
```

The rollout was observed using:

```bash
kubectl get pods -w
```

and:

```bash
kubectl rollout status deployment/api-deployment
```

---

## Deployment Rollback

Deployment history was inspected using:

```bash
kubectl rollout history deployment/api-deployment
```

A previous revision was restored with:

```bash
kubectl rollout undo deployment/api-deployment --to-revision=2
```

This temporarily created configuration drift between the live cluster and the declarative YAML.

Reapplying the manifest restored the Git-defined desired state.

```text
Git Configuration
       │
       ▼
kubectl apply
       │
       ▼
Kubernetes API
       │
       ▼
Controllers
       │
       ▼
Cluster Reconciled
```

---

## External Access

The API is exposed using a NodePort Service.

```text
Client
  │
  ▼
NodePort
  │
  ▼
api-service
  │
  ▼
API Pods
```

Kubernetes dynamically assigns the NodePort.

The current value can be discovered using:

```bash
kubectl get service api-service
```

Because the local Kubernetes cluster runs using KIND inside Docker Desktop/WSL2, host accessibility depends on the Docker/KIND networking configuration.

NodePort functionality was validated from inside the KIND node.

For portable local testing, Kubernetes port forwarding can also be used:

```bash
kubectl port-forward service/api-service 8083:3000
```

---

## Project Structure

```text
cloud-native-app-platform/
│
├── src/
│   └── app.js
│
├── kubernetes/
│   ├── api-service.yaml
│   ├── configmap.yaml
│   ├── deployment.yaml
│   ├── postgres-pvc.yaml
│   ├── postgres-service.yaml
│   ├── postgres-statefulset.yaml
│   ├── redis-deployment.yaml
│   ├── redis-service.yaml
│   └── secret.example.yaml
│
├── .dockerignore
├── .gitignore
├── compose.yaml
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

---

## Running with Docker Compose

Start the application stack:

```bash
docker compose up -d
```

Verify the containers:

```bash
docker compose ps
```

Test the API:

```bash
curl http://localhost:8080/
```

Test application health:

```bash
curl http://localhost:8080/health
```

Test PostgreSQL:

```bash
curl http://localhost:8080/db-check
```

Test Redis:

```bash
curl http://localhost:8080/cache-check
```

Stop the stack:

```bash
docker compose down
```

---

## Deploying to Kubernetes

### Prerequisites

The local environment requires:

```text
Docker
kubectl
KIND
Git
```

Verify:

```bash
docker --version
kubectl version --client
kind version
git --version
```

---

### 1. Clone the Repository

```bash
git clone https://github.com/Rano1000/cloud-native-app-platform.git

cd cloud-native-app-platform
```

---

### 2. Create the KIND Cluster

```bash
kind create cluster --name cloud-native-app-platform
```

Verify:

```bash
kubectl get nodes
```

The node should report:

```text
Ready
```

---

### 3. Build the API Image

```bash
docker build -t cloud-native-app-platform-api:v3 .
```

Verify:

```bash
docker images cloud-native-app-platform-api
```

---

### 4. Load the Image into KIND

```bash
kind load docker-image cloud-native-app-platform-api:v3 \
  --name cloud-native-app-platform
```

This makes the locally built image available to the KIND node's container runtime.

---

### 5. Create the Local Secret

```bash
cp kubernetes/secret.example.yaml kubernetes/secret.yaml
```

Edit:

```bash
nano kubernetes/secret.yaml
```

Replace:

```text
your_database_user
your_database_password
```

with local credentials.

---

### 6. Deploy Configuration

```bash
kubectl apply -f kubernetes/configmap.yaml
kubectl apply -f kubernetes/secret.yaml
```

Verify:

```bash
kubectl get configmap
kubectl get secret
```

---

### 7. Deploy Redis

```bash
kubectl apply -f kubernetes/redis-deployment.yaml
kubectl apply -f kubernetes/redis-service.yaml
```

Verify:

```bash
kubectl get pods
kubectl get service cache
```

---

### 8. Deploy PostgreSQL Storage

```bash
kubectl apply -f kubernetes/postgres-pvc.yaml
```

The claim may initially remain Pending because the KIND StorageClass uses delayed volume binding.

---

### 9. Deploy PostgreSQL

```bash
kubectl apply -f kubernetes/postgres-service.yaml
kubectl apply -f kubernetes/postgres-statefulset.yaml
```

Verify:

```bash
kubectl get statefulset
kubectl get pods
kubectl get pvc
kubectl get pv
```

The PVC should eventually report:

```text
Bound
```

---

### 10. Deploy the API

```bash
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/api-service.yaml
```

Verify:

```bash
kubectl get deployment api-deployment
```

Expected replica state:

```text
READY   3/3
```

---

## Platform Verification

Check workloads:

```bash
kubectl get deployments,statefulsets,pods
```

Check Services:

```bash
kubectl get services
```

Check storage:

```bash
kubectl get pvc
kubectl get pv
```

Check API rollout:

```bash
kubectl rollout status deployment/api-deployment
```

Check Service endpoints:

```bash
kubectl get endpointslices
```

A healthy platform should show:

```text
API Deployment       3/3
Redis Deployment     1/1
PostgreSQL            1/1
postgres-pvc          Bound
api-service           NodePort
cache                 ClusterIP
database              ClusterIP
```

---

## Application Verification

For portable local testing:

```bash
kubectl port-forward service/api-service 8083:3000
```

Then:

```bash
curl http://localhost:8083/
```

Expected:

```json
{
  "message": "Cloud Native API v3 is running",
  "status": "healthy"
}
```

PostgreSQL:

```bash
curl http://localhost:8083/db-check
```

Redis:

```bash
curl http://localhost:8083/cache-check
```

---

## Troubleshooting

The project was developed and validated using Kubernetes-native troubleshooting workflows.

<details>
<summary><b>Inspect Pods</b></summary>

<br>

```bash
kubectl get pods
kubectl get pods -o wide
```

</details>

<details>
<summary><b>Inspect a Workload</b></summary>

<br>

```bash
kubectl describe pod <pod-name>
```

</details>

<details>
<summary><b>Read Application Logs</b></summary>

<br>

```bash
kubectl logs <pod-name>
```

</details>

<details>
<summary><b>Inspect Container Environment</b></summary>

<br>

```bash
kubectl exec <pod-name> -- env
```

</details>

<details>
<summary><b>Inspect Service Endpoints</b></summary>

<br>

```bash
kubectl get endpointslices
```

</details>

<details>
<summary><b>Inspect Deployment Rollout</b></summary>

<br>

```bash
kubectl rollout status deployment/api-deployment
kubectl rollout history deployment/api-deployment
```

</details>

<details>
<summary><b>Inspect Persistent Storage</b></summary>

<br>

```bash
kubectl get pvc
kubectl get pv
kubectl get storageclass
```

</details>

---

## Failure Scenarios Validated

The project includes practical validation of several failure and operational scenarios.

| Scenario | Result |
|---|---|
| API Pod deleted | ReplicaSet created replacement |
| Missing Redis configuration | API entered CrashLoopBackOff |
| Configuration restored | API recovered |
| PostgreSQL Pod deleted | StatefulSet recreated `postgres-0` |
| PostgreSQL Pod recreated | Persistent data remained available |
| API image updated | Rolling deployment performed |
| Deployment rolled back | Previous revision restored |
| YAML reapplied | Desired state reconciled |
| NodePort tested | Service successfully routed traffic |
| Cluster node restarted | Kubernetes workloads recovered |

---

## Kubernetes Concepts Demonstrated

<details>
<summary><b>Workload Management</b></summary>

<br>

- Pods
- Deployments
- ReplicaSets
- StatefulSets
- Desired state
- Reconciliation
- Self-healing
- Scaling
- Rolling updates
- Rollbacks

</details>

<details>
<summary><b>Networking</b></summary>

<br>

- Services
- ClusterIP
- NodePort
- Labels
- Selectors
- EndpointSlices
- Kubernetes DNS
- Service discovery
- Pod networking

</details>

<details>
<summary><b>Storage</b></summary>

<br>

- PersistentVolumeClaims
- PersistentVolumes
- StorageClasses
- Dynamic provisioning
- Volume mounts
- Persistent application data

</details>

<details>
<summary><b>Configuration</b></summary>

<br>

- ConfigMaps
- Secrets
- Environment variables
- Externalized application configuration

</details>

<details>
<summary><b>Reliability</b></summary>

<br>

- Readiness probes
- Liveness probes
- Replica management
- Failure recovery
- Stateful recovery
- Desired-state reconciliation

</details>

<details>
<summary><b>Resource Management</b></summary>

<br>

- CPU requests
- CPU limits
- Memory requests
- Memory limits
- Burstable QoS

</details>

---

## Operational Principles Demonstrated

### Pods Are Disposable

Application availability should not depend on the continued existence of an individual Pod.

```text
Pod Failure
    │
    ▼
Controller Detection
    │
    ▼
Reconciliation
    │
    ▼
Replacement Pod
```

### Stable Networking Belongs to Services

```text
Changing Pod IPs
       │
       ▼
Kubernetes Service
       │
       ▼
Stable DNS Name
```

### Persistent Data Must Outlive Pods

```text
Pod
 │
 X  deleted

PVC
 │
 ▼
PV
 │
 ▼
Data remains available
```

### Git Represents Desired Configuration

```text
Git
 │
 ▼
YAML
 │
 ▼
kubectl apply
 │
 ▼
Kubernetes API
 │
 ▼
Controllers
 │
 ▼
Desired State
```

---

## Design Decisions

### Why Deployment for the API?

The API is stateless and individual replicas are interchangeable.

A Deployment provides:

- Replica management
- Rolling updates
- Rollbacks
- Self-healing

### Why Deployment for Redis?

Redis is used as a simple cache in this project and does not require persistent state.

### Why StatefulSet for PostgreSQL?

PostgreSQL contains persistent application data and benefits from stable workload identity.

### Why ClusterIP for Redis and PostgreSQL?

Neither service needs direct external exposure.

Only internal application workloads should communicate with them.

### Why NodePort for the API?

NodePort provides a simple method of demonstrating external Kubernetes Service exposure in a local KIND environment.

### Why ConfigMap and Secret?

Configuration should remain independent of the container image.

Sensitive and non-sensitive configuration are separated.

---

## Security Considerations

The repository intentionally excludes the real Kubernetes Secret.

```text
kubernetes/secret.yaml
```

is ignored by Git.

Only:

```text
kubernetes/secret.example.yaml
```

is committed.

For a production environment, additional controls would normally include:

- External secret management
- Encryption at rest
- RBAC
- NetworkPolicy
- Pod security controls
- TLS
- Image vulnerability scanning
- Admission policies

These are outside the current project scope.

---

## Current Scope

This repository is a local, production-oriented Kubernetes engineering project.

It demonstrates the architecture and operational behavior of a multi-service application but is not presented as a complete production platform.

Current environment:

```text
Local Workstation
      │
      ▼
Docker Desktop / WSL2
      │
      ▼
KIND
      │
      ▼
Single Kubernetes Node
```

Production systems would normally introduce additional availability, security, networking, observability and infrastructure controls.

---

## Future Engineering Roadmap

The following capabilities are intentionally reserved for future iterations or separate platform-engineering projects:

```text
Current Platform
       │
       ├── Ingress / Gateway API
       ├── TLS
       ├── Horizontal Pod Autoscaler
       ├── Metrics Server
       ├── NetworkPolicy
       ├── RBAC
       ├── Prometheus
       ├── Grafana
       ├── Centralized Logging
       ├── Helm
       ├── CI/CD
       ├── GitOps / Argo CD
       ├── External Secrets
       ├── Database Backups
       └── PostgreSQL High Availability
```

These capabilities are not claimed as part of the current implementation.

---

## Repository Status

<div align="center">

![GitHub last commit](https://img.shields.io/github/last-commit/Rano1000/cloud-native-app-platform?style=for-the-badge&logo=github)

![GitHub repo size](https://img.shields.io/github/repo-size/Rano1000/cloud-native-app-platform?style=for-the-badge&logo=github)

![GitHub stars](https://img.shields.io/github/stars/Rano1000/cloud-native-app-platform?style=for-the-badge&logo=github)

</div>

---

## Project Philosophy

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=19&pause=1100&center=true&vCenter=true&width=850&lines=Build+it.;Observe+it.;Break+it.;Troubleshoot+it.;Fix+it.;Understand+why+it+works." alt="Engineering Philosophy Animation" />

</div>

```text
UNDERSTAND
    │
    ▼
PREDICT
    │
    ▼
BUILD
    │
    ▼
OBSERVE
    │
    ▼
BREAK
    │
    ▼
TROUBLESHOOT
    │
    ▼
FIX
    │
    ▼
EXPLAIN
```

---

## Author

<div align="center">

### Mubarak Ibrahim Rano

**DevOps & Platform Engineering**

Docker · Kubernetes · Linux · CI/CD · Terraform · Platform Engineering

<br>

[![GitHub](https://img.shields.io/badge/GitHub-Rano1000-181717?style=for-the-badge&logo=github)](https://github.com/Rano1000)

<br><br>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=17&pause=1200&center=true&vCenter=true&width=700&lines=Building+Reliable+Infrastructure;Automating+Application+Delivery;Engineering+Cloud-Native+Platforms" alt="Author Animation" />

</div>

---

<div align="center">

**Cloud Native App Platform**

Built with Docker, Kubernetes, PostgreSQL and Redis.

</div>
