<div align="center">

# ☁️ Cloud Native App Platform

### 🚀 From Containerized Application to Resilient Kubernetes Platform

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&center=true&vCenter=true&width=700&lines=Containerize+%E2%86%92+Deploy+%E2%86%92+Scale+%E2%86%92+Recover;Docker+%E2%80%A2+Kubernetes+%E2%80%A2+PostgreSQL+%E2%80%A2+Redis;Building+Cloud-Native+Infrastructure+%F0%9F%9A%80" alt="Typing SVG" />

<br>

[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestrated-326CE5?logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Persistent-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-Caching-DC382D?logo=redis&logoColor=white)](https://redis.io/)
[![Node.js](https://img.shields.io/badge/Node.js-API-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![KIND](https://img.shields.io/badge/KIND-Local_Kubernetes-blue)](https://kind.sigs.k8s.io/)

<br>

**A hands-on DevOps engineering project demonstrating containerization,
Kubernetes orchestration, service discovery, persistent storage,
self-healing, scaling, rolling deployments, health checks and resource management.**

</div>

---

## ⚡ Project Overview

This project demonstrates the journey of an application from source code to a multi-service Kubernetes deployment.

```text
Application
     │
     ▼
Docker
     │
     ▼
Docker Compose
     │
     ▼
Kubernetes
     │
     ▼
Resilient Cloud-Native Application
```

The objective was not simply to make containers run.

The project explores how Kubernetes manages:

- 📦 Application workloads
- ♻️ Self-healing
- 🌐 Service networking
- 🔎 Service discovery
- 🔐 Configuration and secrets
- 💾 Persistent application state
- ❤️ Application health
- 📈 Scaling
- 🔄 Rolling deployments
- ⏪ Rollbacks
- 🧮 CPU and memory resources
- 🚪 Application exposure

---

# 🏗️ Architecture

```text
                              🌍 CLIENT
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

---

# 🔥 Engineering Highlights

| Capability | Implementation |
|---|---|
| 📦 Containerization | Docker |
| 🧩 Multi-Service Development | Docker Compose |
| ☸️ Container Orchestration | Kubernetes |
| 🧪 Local Kubernetes | KIND |
| ♻️ Self-Healing | Deployment + ReplicaSet |
| 📈 Application Scaling | 3 API replicas |
| 🔄 Rolling Updates | Kubernetes Deployment |
| ⏪ Deployment Rollback | Kubernetes rollout |
| ❤️ Health Management | Readiness + Liveness |
| 🧠 Configuration | ConfigMap |
| 🔐 Credentials | Kubernetes Secret |
| ⚡ Caching | Redis |
| 🐘 Database | PostgreSQL |
| 💾 Persistence | PVC + PV |
| 🏠 Stateful Workload | StatefulSet |
| 🌐 Service Discovery | Kubernetes DNS |
| 🚪 External Exposure | NodePort |
| 🧮 Resource Management | Requests + Limits |
| 🛠️ Troubleshooting | kubectl logs / describe / exec |

---

# 📦 Application

The project contains a small Node.js/Express API used to demonstrate infrastructure and Kubernetes behavior.

### API Endpoints

| Endpoint | Purpose |
|---|---|
| `/` | API status |
| `/health` | Kubernetes health checks |
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

# 🐳 Docker

The API is containerized using a Dockerfile based on:

```text
node:22-alpine
```

Dependencies are installed using:

```bash
npm ci
```

The container starts the application with:

```bash
node src/app.js
```

The image is versioned:

```text
cloud-native-app-platform-api:v3
```

---

# 🧩 Docker Compose

Before Kubernetes, the complete application stack was validated using Docker Compose.

```text
Docker Compose
│
├── API
│
├── PostgreSQL
│
└── Redis
```

Compose provided:

- Internal DNS
- Environment variables
- PostgreSQL persistent storage
- Service-to-service networking
- Multi-container orchestration

The application successfully communicated using:

```text
API → database:5432
API → cache:6379
```

This provided the baseline before migrating the architecture to Kubernetes.

---

# ☸️ Kubernetes

The application was migrated to a local Kubernetes cluster running with **KIND**.

```text
Docker Desktop
      │
      ▼
KIND Node
      │
      ▼
Kubernetes
      │
      ├── API Deployment
      ├── Redis Deployment
      ├── PostgreSQL StatefulSet
      ├── Services
      ├── ConfigMap
      ├── Secret
      └── Persistent Storage
```

---

# ♻️ Self-Healing

One of the major behaviors tested in this project was Kubernetes reconciliation.

The API Deployment declares:

```text
replicas: 3
```

Kubernetes continuously attempts to maintain that desired state.

```text
Desired State
     │
     │ 3 API Pods
     ▼

 API-1 ✅
 API-2 💥 deleted
 API-3 ✅
     │
     ▼
ReplicaSet detects difference
     │
     ▼
Replacement Pod created
     │
     ▼
3 API Pods again ✅
```

Pods were deliberately deleted during testing to verify this behavior.

---

# 📈 Scaling

The API was manually scaled to three replicas:

```bash
kubectl scale deployment api-deployment --replicas=3
```

The declarative Kubernetes configuration was then updated to maintain:

```yaml
replicas: 3
```

This demonstrated the difference between:

```text
Imperative change
      ↓
Live cluster

vs.

Declarative configuration
      ↓
Desired state stored in YAML
```

---

# 🌐 Kubernetes Networking

Kubernetes Services provide stable networking for disposable Pods.

### Redis

```text
API
 │
 ▼
cache
 │
 ▼
Redis Service
 │
 ▼
Redis Pod
```

### PostgreSQL

```text
API
 │
 ▼
database
 │
 ▼
PostgreSQL Service
 │
 ▼
postgres-0
```

The API does **not** depend on individual Pod IP addresses.

Instead it uses Kubernetes DNS:

```text
cache
database
```

---

# ⚡ Redis

Redis runs as a Kubernetes Deployment.

```text
redis-deployment
       │
       ▼
   Redis Pod
       │
       ▲
       │
     cache
   ClusterIP
```

Redis connectivity was verified through:

```text
/cache-check
```

Example response:

```json
{
  "cache": "Redis is working"
}
```

---

# 🐘 PostgreSQL

PostgreSQL runs as a Kubernetes StatefulSet:

```text
StatefulSet
     │
     ▼
postgres-0
```

The stable Pod identity makes the stateful nature of the workload explicit.

The API accesses PostgreSQL using:

```text
DB_HOST=database
```

Database connectivity was verified using:

```text
/db-check
```

---

# 💾 Persistent Storage

PostgreSQL uses Kubernetes persistent storage.

```text
PostgreSQL
     │
     ▼
/var/lib/postgresql/data
     │
     ▼
volumeMount
     │
     ▼
postgres-pvc
     │
     ▼
PersistentVolume
```

The cluster's default StorageClass dynamically provisioned the PersistentVolume.

---

## 🧪 Persistence Failure Test

Persistence wasn't assumed.

It was deliberately tested.

```text
Create database row
        │
        ▼
 PostgreSQL writes data
        │
        ▼
      PVC → PV
        │
        ▼
 💥 DELETE postgres-0
        │
        ▼
StatefulSet detects failure
        │
        ▼
Recreates postgres-0
        │
        ▼
Mount existing PVC
        │
        ▼
Query database again
        │
        ▼
 DATA STILL EXISTS ✅
```

The surviving database row:

```text
Kubernetes persistent storage works
```

demonstrated that the Pod lifecycle and persistent data lifecycle are independent.

---

# 🔐 Configuration & Secrets

Application configuration is separated from the container image.

### ConfigMap

Non-sensitive values include:

```text
DB_HOST
DB_PORT
DB_NAME
REDIS_HOST
REDIS_PORT
```

### Secret

Sensitive values include:

```text
DB_USER
DB_PASSWORD
```

The real Secret manifest:

```text
kubernetes/secret.yaml
```

is excluded from Git.

A safe template is provided:

```text
kubernetes/secret.example.yaml
```

Create your local Secret with:

```bash
cp kubernetes/secret.example.yaml kubernetes/secret.yaml
```

Then replace the placeholders with your own local credentials.

> [!IMPORTANT]
> Never commit real credentials to the repository.

---

# ❤️ Health Management

The API includes both Kubernetes **readiness** and **liveness** probes.

```text
                     /health
                        │
             ┌──────────┴──────────┐
             │                     │
             ▼                     ▼
        Readiness               Liveness
             │                     │
             ▼                     ▼
     "Can I receive         "Is the application
        traffic?"              still alive?"
             │                     │
             ▼                     ▼
       Service routing       Container restart
```

### Readiness

Kubernetes checks:

```text
GET /health
```

every 10 seconds.

A Pod that is not ready is removed from normal Service traffic until it becomes ready again.

### Liveness

Kubernetes also continuously checks application health.

Repeated failures allow Kubernetes to restart an unhealthy container.

---

# 🔄 Rolling Updates

The application was upgraded using versioned Docker images.

During a rollout Kubernetes progressively performed:

```text
Old API Pods
     │
     ▼
Create new Pod
     │
     ▼
Wait for readiness
     │
     ▼
New Pod Ready ✅
     │
     ▼
Terminate old Pod
     │
     ▼
Repeat
```

This behavior was observed directly using:

```bash
kubectl get pods -w
```

---

# ⏪ Rollback & Reconciliation

Deployment history was inspected using:

```bash
kubectl rollout history deployment/api-deployment
```

A previous revision was restored using:

```bash
kubectl rollout undo deployment/api-deployment --to-revision=2
```

After rollback, the live cluster temporarily differed from the YAML stored in Git.

Reapplying the declarative manifest reconciled the cluster back to the desired configuration.

```text
Git/YAML Desired State
         │
         ▼
kubectl apply
         │
         ▼
Kubernetes Controller
         │
         ▼
Live Cluster Reconciled ✅
```

---

# 🧮 CPU & Memory Management

The API containers define resource requests and limits.

```text
Requests
─────────────
CPU     100m
Memory  128Mi

Limits
─────────────
CPU     500m
Memory  256Mi
```

Kubernetes therefore assigns the Pods:

```text
QoS Class: Burstable
```

Conceptually:

```text
REQUEST
   │
   └── Kubernetes uses this for scheduling

LIMIT
   │
   └── Maximum resource boundary
```

---

# 🚪 External Access

The API Service uses:

```yaml
type: NodePort
```

The assigned NodePort can be discovered using:

```bash
kubectl get service api-service
```

Traffic follows:

```text
NodePort
    │
    ▼
api-service
    │
    ▼
API Pods
```

Because this project runs with KIND inside Docker Desktop/WSL2, direct host access to the KIND node depends on Docker networking configuration.

NodePort functionality was verified directly from the KIND node.

---

# 📁 Project Structure

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

# 🚀 Run the Project

## 1️⃣ Clone the repository

```bash
git clone https://github.com/Rano1000/cloud-native-app-platform.git

cd cloud-native-app-platform
```

---

## 2️⃣ Create the KIND cluster

```bash
kind create cluster --name cloud-native-app-platform
```

Verify:

```bash
kubectl get nodes
```

---

## 3️⃣ Build the API image

```bash
docker build -t cloud-native-app-platform-api:v3 .
```

---

## 4️⃣ Load the image into KIND

```bash
kind load docker-image cloud-native-app-platform-api:v3 \
  --name cloud-native-app-platform
```

---

## 5️⃣ Create the local Secret

```bash
cp kubernetes/secret.example.yaml kubernetes/secret.yaml
```

Edit:

```bash
nano kubernetes/secret.yaml
```

Replace the placeholder credentials.

---

## 6️⃣ Deploy Redis

```bash
kubectl apply -f kubernetes/redis-deployment.yaml
kubectl apply -f kubernetes/redis-service.yaml
```

---

## 7️⃣ Deploy PostgreSQL

```bash
kubectl apply -f kubernetes/postgres-pvc.yaml
kubectl apply -f kubernetes/postgres-service.yaml
kubectl apply -f kubernetes/postgres-statefulset.yaml
```

---

## 8️⃣ Deploy Configuration

```bash
kubectl apply -f kubernetes/configmap.yaml
kubectl apply -f kubernetes/secret.yaml
```

---

## 9️⃣ Deploy the API

```bash
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/api-service.yaml
```

---

# 🔍 Verify Everything

```bash
kubectl get pods
```

```bash
kubectl get deployments
```

```bash
kubectl get statefulsets
```

```bash
kubectl get services
```

```bash
kubectl get pvc
```

```bash
kubectl get pv
```

Expected architecture:

```text
3 API Pods       ✅
Redis            ✅
PostgreSQL       ✅
PVC Bound        ✅
Services         ✅
Health Probes    ✅
```

---

# 🛠️ Troubleshooting Commands

Some of the Kubernetes commands used while troubleshooting this project:

```bash
kubectl get pods
```

```bash
kubectl describe pod <pod-name>
```

```bash
kubectl logs <pod-name>
```

```bash
kubectl exec -it <pod-name> -- sh
```

```bash
kubectl get endpointslices
```

```bash
kubectl rollout status deployment/api-deployment
```

```bash
kubectl rollout history deployment/api-deployment
```

These were used to investigate configuration, networking, application crashes, health status and deployment behavior.

---

# 🧠 Concepts Demonstrated

<details>
<summary><b>☸️ Kubernetes Workloads</b></summary>

<br>

- Pods
- Deployments
- ReplicaSets
- StatefulSets
- Desired-state reconciliation
- Self-healing

</details>

<details>
<summary><b>🌐 Kubernetes Networking</b></summary>

<br>

- Services
- ClusterIP
- NodePort
- Selectors
- Labels
- EndpointSlices
- Kubernetes DNS
- Service discovery

</details>

<details>
<summary><b>💾 Storage</b></summary>

<br>

- PersistentVolumeClaims
- PersistentVolumes
- StorageClasses
- Dynamic provisioning
- Volume mounts
- Stateful data persistence

</details>

<details>
<summary><b>❤️ Reliability</b></summary>

<br>

- Readiness probes
- Liveness probes
- Self-healing
- Rolling updates
- Rollbacks
- Replica management

</details>

<details>
<summary><b>🔐 Configuration</b></summary>

<br>

- ConfigMaps
- Secrets
- Environment variables
- Git-safe Secret templates

</details>

<details>
<summary><b>🧮 Resource Management</b></summary>

<br>

- CPU requests
- CPU limits
- Memory requests
- Memory limits
- Burstable QoS

</details>

---

# 🧭 What I Learned

This project strengthened practical understanding of how Kubernetes behaves beyond simply writing YAML.

Some of the most important lessons included:

> Containers can be running while the application inside them is not ready.

> Pods should be treated as disposable resources.

> Services provide stable networking while Pod IPs can change.

> Persistent application data should not depend on the lifecycle of a Pod.

> Kubernetes continuously reconciles actual state toward desired state.

> Configuration stored in Git and configuration running in the cluster can drift.

> Health probes, resource controls and persistent storage are important parts of reliable workload operation.

---

# 🔮 Future Improvements

Possible future improvements include:

- Ingress / Gateway API
- TLS
- Horizontal Pod Autoscaler
- Metrics Server
- Prometheus
- Grafana
- Centralized logging
- NetworkPolicy
- Helm packaging
- CI/CD deployment pipeline
- Managed secret storage
- PostgreSQL backup strategy
- Database high availability
- Cloud Kubernetes deployment

These are intentionally outside the current project's scope.

---

# ⚠️ Project Scope

> [!NOTE]
> This repository is a **production-oriented learning lab**, not a complete production platform.

It demonstrates real Kubernetes and DevOps concepts locally using KIND.

A real production deployment would require additional infrastructure and operational controls such as TLS, monitoring, backups, security policies, highly available databases, managed secrets and cloud infrastructure.

---

<div align="center">

## 👨‍💻 Author

### Mubarak Ibrahim Rano

**DevOps & Platform Engineering**

Building • Automating • Deploying • Scaling ☁️

<br>

⭐ **If you find this project useful, consider starring the repository.**

<br>

**Docker • Kubernetes • Linux • CI/CD • Terraform • Platform Engineering**

</div>
